(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(90)),c={title:"Web3js/Taquito differences",id:"web3js_taquito",author:"Claude Barde"},s={unversionedId:"web3js_taquito",id:"web3js_taquito",isDocsHomePage:!1,title:"Web3js/Taquito differences",description:"Web3js and Taquito have a common goal: connecting dapps to the Ethereum and Tezos blockchain (respectively) and thus implement similar approaches. However, these approaches are also different due to the nature of the Ethereum and the Tezos blockchains.",source:"@site/../docs/web3js_taquito.md",permalink:"/docs/web3js_taquito",sidebar:"docs",previous:{title:"Working with Maps and BigMaps",permalink:"/docs/maps_bigmaps"},next:{title:"RPC Package",permalink:"/docs/rpc_package"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Connection",id:"connection",children:[]},{value:"Get account balance",id:"get-account-balance",children:[]},{value:"Transfer tokens",id:"transfer-tokens",children:[]},{value:"Create a contract instance",id:"create-a-contract-instance",children:[]},{value:"Get the &quot;counter&quot; value from the contract storage",id:"get-the-counter-value-from-the-contract-storage",children:[]},{value:"Call the increment method on the contract instance",id:"call-the-increment-method-on-the-contract-instance",children:[]},{value:"Deploy/originate a smart contract",id:"deployoriginate-a-smart-contract",children:[]},{value:"Check if the wallet injected an outdated version of the library in the browser",id:"check-if-the-wallet-injected-an-outdated-version-of-the-library-in-the-browser",children:[]},{value:"Full code to connect to the network and send a transaction to a smart contract",id:"full-code-to-connect-to-the-network-and-send-a-transaction-to-a-smart-contract",children:[]}],l={rightToc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Web3js and Taquito have a common goal: connecting dapps to the Ethereum and Tezos blockchain (respectively) and thus implement similar approaches. However, these approaches are also different due to the nature of the Ethereum and the Tezos blockchains."),Object(r.b)("p",null,"A comparison of the methods implemented by Web3js and Taquito can put in perspective their similarities and differences."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":\n",Object(r.b)("inlineCode",{parentName:"p"},"npm install web3")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":\n",Object(r.b)("inlineCode",{parentName:"p"},"npm install @taquito/taquito")),Object(r.b)("p",null,"Web3js comes as a single package containing all the necessary tools to connect to the Ethereum blockchain while Taquito is made of various packages that you can install and import whenever you need them."),Object(r.b)("h2",{id:"connection"},"Connection"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Web3 from 'web3';\n\nconst web3 = new Web3(Web3.providers.HttpProvider('http://localhost:9545'));\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { Tezos } from @taquito/taquito;\n\nTezos.setProvider({rpc: "http://localhost:9545"});\n')),Object(r.b)("p",null,"The Web3js package exports a class that needs to be instantiated before being used. The difference between ",Object(r.b)("em",{parentName:"p"},"Web3")," and ",Object(r.b)("em",{parentName:"p"},"web3")," is a common source of errors in Ethereum development.\nTaquito exports a ready-to-use singleton object conveniently called ",Object(r.b)("strong",{parentName:"p"},"Tezos"),". However, if you want to instantiate and initialize it yourself, it is also possible to import ",Object(r.b)("inlineCode",{parentName:"p"},"TezosToolkit")," from Taquito and write ",Object(r.b)("inlineCode",{parentName:"p"},"const Tezos = new TezosToolkit(options);"),", which is similar to the Web3js code."),Object(r.b)("h2",{id:"get-account-balance"},"Get account balance"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const balance = await web3.eth.getBalance('account_address');\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const balance = await Tezos.tz.getBalance('account_address');\n")),Object(r.b)("p",null,"Both Web3js and Taquito use the ",Object(r.b)("inlineCode",{parentName:"p"},"getBalance")," method with the account address to fetch its balance from the network."),Object(r.b)("h2",{id:"transfer-tokens"},"Transfer tokens"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const op = await web3.eth.sendTransaction({\n  from: 'sender_address',\n  to: 'recipient_address',\n  value: 'amount_in_wei',\n});\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const op = await Tezos.wallet.transfer({\n  to: 'recipient_address',\n  amount: 'amount_in_tez',\n});\nawait op.confirmation();\n")),Object(r.b)("p",null,"Web3js and Taquito allow the transfer of tokens from one address to another in a similar fashion. The transaction on Ethereum returns a promise with receipt/event emitter and resolves when the receipt is available. The transaction on Tezos returns a WalletOperation promise with a ",Object(r.b)("inlineCode",{parentName:"p"},"confirmation")," method that waits for the number of confirmations specified as a parameter (default 1) before resolving."),Object(r.b)("h2",{id:"create-a-contract-instance"},"Create a contract instance"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const contract = new web3.eth.Contract(JSON_ABI);\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const contract = await Tezos.wallet.at('contract_address');\n")),Object(r.b)("p",null,'The two approaches are radically different here: Web3js constructs the contract interface from the "ABI" that\'s shipped with the dapp while Taquito fetches the contract structure directly from the blockchain to construct the interface.'),Object(r.b)("h2",{id:"get-the-counter-value-from-the-contract-storage"},'Get the "counter" value from the contract storage'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const counter = await contract.methods.getCounter().call();\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const counter = await contract.storage();\n")),Object(r.b)("p",null,"This is another point that shows how different the Ethereum and the Tezos blockchains are.\nOn Ethereum, the contract has to implement getter functions to return values from its storage and make them available to dapps.\nOn Tezos, the whole storage is always available and developers don't have to add view functions to their contracts to make the values in the storage available."),Object(r.b)("h2",{id:"call-the-increment-method-on-the-contract-instance"},"Call the increment method on the contract instance"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const receipt = await contract.methods.increment(1).send();\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const op = await contract.methods.increment(1).send();\nawait op.confirmation();\n")),Object(r.b)("p",null,"Calling functions/entrypoints is very similar on Ethereum and Tezos. Just remember that the function doesn't return any value from the blockchain on Tezos."),Object(r.b)("h2",{id:"deployoriginate-a-smart-contract"},"Deploy/originate a smart contract"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const newInstance = await myContract\n  .deploy({\n    data: 'contract_code',\n    arguments: 'constructor_arguments',\n  })\n  .send();\nconst contractAddress = newInstance.options.address;\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const op = await Tezos.wallet\n  .originate({\n    code: 'parsed_michelson',\n    storage: 'initial_storage',\n  })\n  .send();\nconst contract = await op.contract();\nconst contractAddress = contract.address;\n")),Object(r.b)("p",null,"Both functions returns a new instance of the contract from which the address of the newly deployed/originated contract can be found."),Object(r.b)("h2",{id:"check-if-the-wallet-injected-an-outdated-version-of-the-library-in-the-browser"},"Check if the wallet injected an outdated version of the library in the browser"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if(typeof window.web3 !== undefined){\n // MetaMask injected web3\n ...\n} else {\n ...\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Nope;\n")),Object(r.b)("h2",{id:"full-code-to-connect-to-the-network-and-send-a-transaction-to-a-smart-contract"},"Full code to connect to the network and send a transaction to a smart contract"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Web3js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Web3 from 'web3';\n\nlet web3;\nif (typeof window.web3 !== 'undefined') {\n  web3 = new Web3(window.web3.currentProvider);\n} else {\n  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));\n}\n\nconst userBalance = await web3.eth.getBalance('0x_address');\n\nconst contract = new web3.eth.Contract('contract_ABI', 'contract_address');\n\nconst counter = await contract.methods.counter().call();\n\nconst receipt = await contract.methods.increment(counter + 1).send();\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Taquito"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Tezos } from '@taquito/taquito';\n\nconst wallet = Tezos.setProvider({ rpc: 'http://localhost:8732', wallet }); // use the wallet of your choice\n\nconst userBalance = await Tezos.tz.getBalance('tz_address');\n\nconst contract = await Tezos.wallet.at('contract_address');\n\nconst counter = await contract.storage();\n\nconst op = await contract.methods.increment(counter + 1).send();\nawait op.confirmation();\n")))}b.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);