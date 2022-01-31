/**
 * @description 环境变量
 * @author zhang
 */

const ENV = process.env.NODE_ENV

module.exports = {
    ENV,
    isPrd: ENV === 'production',
    isPrdDev: ENV === 'prd_dev',
    isDev: ENV === 'dev',
    isTest: ENV === 'test',
    isTestLocal: ENV === 'test_local',
    isTestRemote: ENV === 'test_remote',
}
