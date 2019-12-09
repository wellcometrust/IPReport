Qualtrics.SurveyEngine.addOnload(function () {
    //------------BUTTONS:
    var next = "Four";
    var details = "ThreeA";

    loadSwitch("next", [details, next], qFilters); //NEXT on load
    prevbuttonDefault("Section 2: Summary"); //PREVIOUS on load
    keyupSwitch([details, next]); //keyup switcher
});

Qualtrics.SurveyEngine.addOnReady(function () {
    //----------------Number formatting: 
    formatNumeral(this);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});