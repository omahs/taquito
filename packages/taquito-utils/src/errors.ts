export {
  InvalidHexStringError,
  InvalidContractAddressError,
  InvalidKeyError,
  InvalidPublicKeyError,
  InvalidKeyHashError,
  InvalidOperationHashError,
  InvalidOperationKindError,
  DeprecationError,
  ProhibitedActionError,
  InvalidChainIdError,
} from '@taquito/core';

/**
 *  @category Error
 *  @description Error that indicates an invalid signature being passed or used
 */
export class InvalidSignatureError extends Error {
  public name = 'InvalidSignatureError';
  constructor(public signature: string, errorDetail?: string) {
    super();
    const baseMessage = `The signature '${signature}' is invalid.`;
    this.message = errorDetail ? `${baseMessage} ${errorDetail}` : baseMessage;
  }
}

/**
 *  @category Error
 *  @description Error that indicates an invalid message being passed or used
 */
export class InvalidMessageError extends Error {
  public name = 'InvalidMessageError';
  constructor(public msg: string, public errorDetail?: string) {
    super();
    const baseMessage = `The message '${msg}' is invalid.`;
    this.message = errorDetail ? `${baseMessage} ${errorDetail}` : baseMessage;
  }
}

// NOT USED
/**
 *  @category Error
 *  @description Error that indicates invalid protocol hash being passed or used
 */
export class InvalidProtocolHashError extends Error {
  public name = 'InvalidProtocolHashError';
  constructor(public protocolHash: string) {
    super(`The protocol hash '${protocolHash}' is invalid`);
  }
}

/**
 *  @category Error
 *  @description General error that indicates a failure when trying to convert data from one type to another
 */
export class ValueConversionError extends Error {
  public name = 'ValueConversionError';
  constructor(public value: string, public desiredType: string) {
    super(`Unable to convert ${value} to a ${desiredType}`);
  }
}
