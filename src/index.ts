export default class RPI {
    private static scrolling: boolean = false;
    private static scrollingDelay: number = 250;

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
        document.addEventListener('resize', () => {
            if (progressBar != null) {
                progressBar.setAttribute("max", this.getMax());
                progressBar.setAttribute("value", this.getValue());
            }
        });

        document.addEventListener('scroll', () => {
            this.scrolling = true;
        });

        setInterval(() => {
            if (this.scrolling && progressBar != null) {
                this.scrolling = false;
                progressBar.setAttribute("value", this.getValue());
            }
        }, this.scrollingDelay);


    }
}