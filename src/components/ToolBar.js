import AlertButton from "./AlertButton";
import { buttons } from "../data/buttons";
export default function ToolBar() {
    return (
        <div>
            {/* <AlertButton msg='quack'>Animal 1</AlertButton>
            <AlertButton msg='moo'>Animal 2</AlertButton>
            <AlertButton msg='woof'>Animal 3</AlertButton>
            <AlertButton msg='YEEEEHAAA'>Animal 4</AlertButton> */}
            {buttons.map((btn) => btn.message && btn.children && <AlertButton msg={btn.message}>{btn.children}</AlertButton>)}
        </div>
    );
}