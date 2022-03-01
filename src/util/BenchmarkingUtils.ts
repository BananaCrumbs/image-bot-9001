
export default class BenchmarkingUtils {
    
    private static startTime = 0;
    
    public static start() {
        this.startTime = Date.now();
    }
    
    public static end(): number {
        const et = Date.now();
        const st = this.startTime;
        this.startTime = 0;
        return et - st;
    }
    
}
