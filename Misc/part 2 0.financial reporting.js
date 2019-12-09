Qualtrics.SurveyEngine.addOnload(function () {
    //---------------Buttons 
    nextbuttonDefault("Financial contact info");//NEXT on load
    loadSwitch("back", ["NineD", "Nine"], qFilters); //PREVIOUS on load
});

Qualtrics.SurveyEngine.addOnReady(function () {
	/*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});