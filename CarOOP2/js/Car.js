function Car(containerId) {
  // Bussiness logic layer
  that = this;
  this._engine = new Engine();
  this._gearBox = new GearBox();

  this._view = new CarView();

  this._view.addEventListener('start', function () {
    that.start();
  });

  // Utill logic
  this._logger = new Logger();

  //this._render(containerId);
  this._view.render(containerId);

}

Car.prototype = {
  //interface
  start: function () {
    var randomNumber = Math.random();
    if (randomNumber > 0.5) {
      this._carStarted();
    } else {
      this._carCannotBeStarted();
    }
  },

  // private methods
  _carStarted: function () {
    this._logger.log('ok');
  },
  _carCannotBeStarted: function () {
    this._logger.log('ok');
    this._view.drawStatus('Car can`t be starteed. Try again!');
  }
};