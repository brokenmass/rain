import { functionDescriptor } from '.';
import { VALUE_TYPE } from '../coreTypes';

const eq: functionDescriptor[] = [
  {
    used: false,
    inputs: [],
    output: VALUE_TYPE.VOID,
    code: {
      asm_x86_64: {
        call: (println) => {
          println('INT3');
        },
      },
    },
  },
];

export default eq;
