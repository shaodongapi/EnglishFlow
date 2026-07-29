// 兼容层:转发到 core/wordBank。
// 注意:不再静态 import words-degree,词库运行时懒加载。
// 旧代码若直接 import { WORDS / WORD_MAP } 会拿到懒加载前的空值,
// 因此消费者应改用 core/wordBank 的 getBank()/getMap() + ensureBank() 门控。
export { ensureBank, getBank, getMap } from '../core/wordBank'
