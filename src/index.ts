export default class RPI {

    private static getMax(): string {
        return (window.document.body.scrollHeight - window.innerHeight) + "";
    }

    private static getValue(): string {
        return window.scrollY + "";
    }

    private static getProgressBar(): any {
        return document.getElementsByTagName("progress")[0];
    }

    public static init(): void {
        const progressBar: any = this.getProgressBar();

        // Set the Max attr for the first time
        progressBar.setAttribute("max", this.getMax());

        window.onscroll = () => {
            progressBar.setAttribute("value", this.getValue());
        };

        window.onresize = () => {
            progressBar.setAttribute("max", this.getMax());
            progressBar.setAttribute("value", this.getValue());
        };
    }
}