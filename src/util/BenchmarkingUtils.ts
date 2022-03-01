
export default class BenchmarkingUtils {
    
    private constructor() {}
    
    private static startTime: number = 0;
    
    public static start() {
        this.startTime = Date.now();
    }
    
    public static end(): number {
        let et = Date.now();
        let st = this.startTime;
        this.startTime = 0;
        return et - st;
    }
    
}
