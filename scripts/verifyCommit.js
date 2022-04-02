// 参考 https://github.com/vuejs/core/blob/main/scripts/verifyCommit.js
// Invoked on the commit-msg git hook by yorkie.

const chalk = require('chalk');
const msgPath = process.env.GIT_PARAMS; // 获取 git/COMMIT_EDITMSG 路径
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim(); // 提交msg
chalk.level = 1; // 使chalk在 git 中生效

const commitRE = /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
      chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n` +
      `    ${chalk.green(
        `type must be one of [feat, fix, docs, style, refactor, perf, test, workflow, build, ci, chore, types, wip, release] [type-enum]`,
      )}\n\n` +
      chalk.red(`  See .github/commit-convention.md for more details.\n`),
  );
  process.exit(1);
}
