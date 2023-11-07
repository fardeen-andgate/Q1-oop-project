import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Welcome() {
    let bookIntro = chalkAnimation.neon('Welcome to the Book Store');
    await sleep();
    bookIntro.stop();
    console.log(chalk.greenBright(`
    ██▄ ██ █▄█ ██ █╬ ███ ███ ╬╬ ██▄ █╬█ ╬╬ ██ ███ ███ ██▄ ██ ██ █╬╬█
    █╬█ █▄ ███ █▄ █╬ █╬█ █▄█ ╬╬ █▄█ █▄█ ╬╬ █▄ █▄█ █▄╬ █╬█ █▄ █▄ ██▄█
    ███ █▄ ╬█╬ █▄ ██ █▄█ █╬╬ ╬╬ █▄█ ╬█╬ ╬╬ █╬ █╬█ █╬█ ███ █▄ █▄ █╬██`));
}
export default Welcome;
