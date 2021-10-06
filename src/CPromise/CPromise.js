const states = {
    'pending': 'pending',
    'fulfilled': 'fulfilled',
    'rejected': 'rejected'
};

class CPromise {
    constructor(func) {
        this.state = states.pending;
        this.result = undefined;
        this.queue = {
            res: [],
            rej: []
        };

        setTimeout(()=>func(this.applyResolve.bind(this), this.applyReject.bind(this)));
    }

    applyResolve() {
        if (this.state !== states.rejected) {
            this.queue.res.forEach((handler) => handler());
            this.state = states.fulfilled;
        }
    }

    applyReject() {
        if (this.state !== states.fulfilled) {
            this.queue.rej.forEach((handler) => handler());
            this.state = states.rejected;
        }
    }

    then(handler) {
        if (this.state === states.fulfilled) {
            handler();
        } else {
            this.queue.res.push(handler);
        }

        return this;
    }

    catch(handler) {
        if (this.state === states.rejected) {
            handler();
        } else {
            this.queue.rej.push(handler);
        }

        return this;
    }
};

export default CPromise;
