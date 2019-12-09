Qualtrics.SurveyEngine.addOnload(function () {
    //-----------skip last check reminder-upload page:
    checkSkip1("${e://Field/checkReminder}",2);

    //---------------Buttons 
    nextbuttonDefault("Upload declaration");
    loadSwitch("back", ["ElevenD", "Eleven"], qFilters); //PREVIOUS on load
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/
});