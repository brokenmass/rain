import { functionDescriptor } from '.';
import { VALUE_TYPE } from '../coreTypes';

const ge: functionDescriptor[] = [
  {
    used: false,
    inputs: [VALUE_TYPE.INT64, VALUE_TYPE.INT64],
    output: VALUE_TYPE.BOOL,
    code: {
      asm_x86_64: {
        call: (println) => {
          println('mov rcx, 0');
          println('mov rdx, 1');
          println('pop rbx');
          println('pop rax');
          println('cmp rax, rbx');
          println('cmovge rcx, rdx');
          println('push rcx');
        },
      },
    },
  },
];

export default ge;