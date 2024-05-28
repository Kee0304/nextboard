import styles from './submit.module.css'

export function SubmitButton({originalTask, message, data}: any) {

    const subStack:Array<any> = [];

    async function avoidDoubleClick():Promise<void> {
        if (subStack) {
            subStack.push(originalTask);
            await originalTask(data);
            subStack.pop();
        }
    }

    return (
        <div className={styles.buttoncontainer}>
            <button className={styles.submitbutton} onClick={avoidDoubleClick}>{message}</button>
        </div>
    )
}