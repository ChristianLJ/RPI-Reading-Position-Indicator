"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RPI {
    static getMax() {
        return (window.document.body.scrollHeight - window.innerHeight) + "";
    }
    static getValue() {
        return window.scrollY + "";
    }
    static getProgressBar() {
        return document.getElementsByTagName("progress")[0];
    }
    static init() {
        const progressBar = this.getProgressBar();
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
RPI.scrolling = false;
RPI.scrollingDelay = 250;
exports.default = RPI;
//# sourceMappingURL=index.js.map