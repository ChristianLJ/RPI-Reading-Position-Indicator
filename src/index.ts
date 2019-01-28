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
        if (progressBar != null) {
            progressBar.setAttribute("max", this.getMax());
        }

        window.onscroll = () => {
            if (progressBar != null) {
                progressBar.setAttribute("value", this.getValue());
            }
        };

        window.onresize = () => {
            if (progressBar != null) {
                progressBar.setAttribute("max", this.getMax());
                progressBar.setAttribute("value", this.getValue());
            }
        };
    }
}