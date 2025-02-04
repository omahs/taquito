import {
  MichelsonContract,
  MichelsonContractSection,
  MichelsonType,
  MichelsonData,
  MichelsonCode,
  MichelsonReturnType,
} from './michelson-types';
import {
  assertContractValid,
  contractSection,
  contractEntryPoint,
  assertDataValid,
  assertTypeAnnotationsValid,
  InstructionTrace,
  Context,
  functionType,
  isDataValid,
  contractEntryPoints,
} from './michelson-typecheck';
import { Parser, ParserOptions } from './micheline-parser';
import {
  assertMichelsonContract,
  assertMichelsonType,
  assertMichelsonData,
} from './michelson-validator';
import {
  InvalidDataExpressionError,
  InvalidEntrypointError,
  InvalidContractError,
  InvalidTypeExpressionError,
} from './error';

export interface ContractOptions extends ParserOptions {
  traceCallback?: (t: InstructionTrace) => void;
}

export class Contract {
  private ctx: Context;
  public readonly output: MichelsonReturnType;

  constructor(public readonly contract: MichelsonContract, opt?: ContractOptions) {
    this.ctx = { contract, ...opt };
    this.output = assertContractValid(contract, this.ctx);
  }

  static parse(src: string | object, opt?: ContractOptions): Contract {
    const p = new Parser(opt);
    const expr = typeof src === 'string' ? p.parseScript(src) : p.parseJSON(src);
    if (expr === null) {
      throw new InvalidContractError('empty contract');
    }
    if (assertMichelsonContract(expr)) {
      return new Contract(expr, opt);
    }
    throw undefined;
  }

  static parseTypeExpression(src: string | object, opt?: ParserOptions): MichelsonType {
    const p = new Parser(opt);
    const expr = typeof src === 'string' ? p.parseScript(src) : p.parseJSON(src);
    if (expr === null) {
      throw new InvalidTypeExpressionError('empty type expression');
    }
    // remove assertTypeAnnotationsValid from if block because: () => void || throw error
    if (assertMichelsonType(expr)) {
      assertTypeAnnotationsValid(expr);
      return expr;
    }
    throw undefined;
  }

  static parseDataExpression(src: string | object, opt?: ParserOptions): MichelsonData {
    const p = new Parser(opt);
    const expr = typeof src === 'string' ? p.parseScript(src) : p.parseJSON(src);
    if (expr === null) {
      throw new InvalidDataExpressionError('empty data expression');
    }
    if (assertMichelsonData(expr)) {
      return expr;
    }
    throw undefined;
  }

  section<T extends 'parameter' | 'storage' | 'code'>(section: T): MichelsonContractSection<T> {
    return contractSection(this.contract, section);
  }

  entryPoints(): [string, MichelsonType][] {
    return contractEntryPoints(this.contract);
  }

  entryPoint(ep?: string): MichelsonType | null {
    return contractEntryPoint(this.contract, ep);
  }

  assertDataValid(d: MichelsonData, t: MichelsonType): void {
    assertDataValid(d, t, this.ctx);
  }

  isDataValid(d: MichelsonData, t: MichelsonType): boolean {
    return isDataValid(d, t, this.ctx);
  }

  assertParameterValid(ep: string | null, d: MichelsonData): void {
    const t = this.entryPoint(ep || undefined);
    if (t === null) {
      throw new InvalidEntrypointError(ep?.toString());
    }
    this.assertDataValid(d, t);
  }

  isParameterValid(ep: string | null, d: MichelsonData): boolean {
    try {
      this.assertParameterValid(ep, d);
      return true;
    } catch {
      return false;
    }
  }

  functionType(inst: MichelsonCode, stack: MichelsonType[]): MichelsonReturnType {
    return functionType(inst, stack, this.ctx);
  }
}

export const dummyContract = new Contract([
  { prim: 'parameter', args: [{ prim: 'unit' }] },
  { prim: 'storage', args: [{ prim: 'unit' }] },
  {
    prim: 'code',
    args: [[{ prim: 'CAR' }, { prim: 'NIL', args: [{ prim: 'operation' }] }, { prim: 'PAIR' }]],
  },
]);
