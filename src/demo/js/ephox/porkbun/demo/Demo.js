import { JQuery as $ } from '@ephox/wrap';
import Outlaw from 'ephox/porkbun/demo/Outlaw';
import Saloon from 'ephox/porkbun/demo/Saloon';
import Sheriff from 'ephox/porkbun/demo/Sheriff';



export default <any> function () {
  $(document).ready(function () {

    var saloon = Saloon.create();

    var sheriff = Sheriff.create();

    sheriff.watch(saloon);

    var fred = Outlaw.create("Fred");
    var barney = Outlaw.create("Barney");

    fred.addAction("Shoot Barney", function () {
      fred.shoot(barney);
    });

    barney.addAction("Shoot Fred", function () {
      barney.shoot(fred);
    });

    fred.enter(saloon);
    barney.enter(saloon);

    $('body').append(sheriff.getElement());
    $('body').append(saloon.getElement());
  });
};