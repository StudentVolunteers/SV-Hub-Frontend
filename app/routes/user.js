import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Chris', 'Martin', 'Michael', 'Nathan', 'Jessica', 'Anna', 'Bert'];
  }
});
