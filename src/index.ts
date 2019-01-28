export default class RPI {

    private static getMax(): number {
        return window.document.body.scrollHeight - window.innerHeight;
    }

    private static getValue(): number {
        return window.scrollY;
    }

    private static getProgressBar(): HTMLElement {
        return document.getElementsByTagName("progress")[0];
    }

    public static init(): void {
        const progressBar: any = this.getProgressBar();

        // Set the Max attr for the first time
        progressBar.attr({max: this.getMax()});

        window.onscroll = () => {
            progressBar.attr({value: this.getValue()});
        };

        window.onresize = () => {
            progressBar.attr({max: this.getMax(), value: this.getValue()});
        };
    }
}