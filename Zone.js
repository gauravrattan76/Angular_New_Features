Zone.js in Angular-
____________________________________________________


Why we need Zone js -

Angular introduced Zone.js to handle change detection. This allows Angular to decide when the UI has to be refreshed. Usually, you don’t have to care about any of this, because Zone.js just works.
However, if something goes wrong with Zone.js it can be very frustrating to analyze and understand. This is why every developer should know some basics about Zone.js.



_____________________________________________

what is change detection-

zone js is used by angular for change detction wether the ui needs to be updated or not.




__________________________________________________________


Zone.js is the key to Angular's change detection.

Zone creates a wrapper around all asynchronous operations in the browser such as user interactions, HTTP, timers and any other changes that can cause changes in state.

Zone knows when any these operations completes. Angular in-turn, subscribes to notifications from Zone for whenever one of these operations completes. This lets Angular know that it can run its change detection algorithms and re-render anything that has changed.

This minimizes any rendering churn and makes it efficient.

______________________________________________________
