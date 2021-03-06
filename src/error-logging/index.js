var ErrorLogging = require('./error-logging')

module.exports = {
  ErrorLogging: ErrorLogging,
  registerServices: function registerServices (serviceFactory) {
    serviceFactory.registerServiceCreator('ErrorLogging', function () {
      var apmService = serviceFactory.getService('ApmServer')
      var configService = serviceFactory.getService('ConfigService')
      var loggingService = serviceFactory.getService('LoggingService')
      return new ErrorLogging(apmService, configService, loggingService)
    })
  }
}
