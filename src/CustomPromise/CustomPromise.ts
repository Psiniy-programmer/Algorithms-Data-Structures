enum StateStatus {
    pending,
    fulfilled,
    rejected
};

type TResolve = (res: any) => void;
type TReject = (err: any) => void;

class CustomPromise {
    state: StateStatus;
    result: any;

    resolve(res: any) {
        if (this.state !== StateStatus.rejected) {
            this.result = res;
            this.state = StateStatus.fulfilled;
        }
    }

    reject(err: any) {
        if (this.state !== StateStatus.fulfilled) {
            this.result = err;
            this.state = StateStatus.rejected;
        }
    }

    constructor(callback: (resolve: TResolve, reject: TReject) => void) {
        this.result = undefined;
        this.state = StateStatus.pending;


        callback(res => {
            if (res) {
                this.resolve(res);
            }
        }, err => {
            if (err) {
                this.reject(err);
            }
        })
    }

    then<resultRes, resultRej>(onFulfilled?: ((val: any) => resultRes | undefined | null), onRejected?: ((val: any) => resultRej | undefined | null)) {
        if (this.state === StateStatus.fulfilled) {
            onFulfilled(((val: any) => this.result));
        }
    }
};

export default CustomPromise;


// let promist = new CustomPromise(function (resolve,reject) {
//
// })