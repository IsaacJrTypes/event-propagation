import AlertButton from "./AlertButton";
export default function ToolBar() {
    return (
        <div>
            <AlertButton msg='quack'>Animal 1</AlertButton>
            <AlertButton msg='moo'>Animal 2</AlertButton>
            <AlertButton msg='woof'>Animal 3</AlertButton>
            <AlertButton msg='YEEEEHAAA'>Animal 4</AlertButton>
        </div>
    );
}