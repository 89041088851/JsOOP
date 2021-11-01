function Car(containerId) {
  // Bussiness logic layer
  this._engine = new Engine();
  this._gearBox = new GearBox();

  // Utill logic
  this._logger = new Logger();

  this._render(containerId);

}

Car.prototype = {
  //interface
  start: function() {
    var randomNumber = Math.random();
    if (randomNumber > 0.5) {
      this._carStarted();
    } else {
      this._carCannotBeStarted();
    }
  },

  // private methods
  _carStarted: function() {
    this._logger.log('ok');
  },
  _carCannotBeStarted: function() {
    this._logger.log('ok');
    this._drawStatus('Car can`t be starteed. Try again!');
  },
    _render: function(containerId) {
    var container = document.getElementById(containerId);
    container.innerHTML = `
    <div class="car"
      <div class="info-panel">
        <label>status: </label>
        <span data-role="status">off</span>
      </div>
      <div class="controls">
        <input data-role="start-car" type="button" value="Start">
        <hr>
        <label>Gear box: </label>
        <span data-role="gear-box-value">N</span>
      </div>
    </div>
    `;

    this._startButtons = document.getElementById(containerId).querySelectorAll('[data-role="start-car"]');
    this._statusLabels = document.getElementById(containerId).querySelectorAll('[data-role="status"]');
    this._gearBoxValueLabels = document.getElementById(containerId).querySelectorAll('[data-role="gear-box-value"]');
  
  },
  _drawStatus: function(status) {
    this._processEls(this._statusLabels, function (item) {
      item.innerHTML = status;
    });
  },
  _processEls: function(arrayOfEls, proccessor) {
    for (var i = 0; i < arrayOfEls.length; i++) {
      var item = arrayOfEls[i];
      proccessor(item);
    }
  }
};