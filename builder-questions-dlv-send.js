
  document.addEventListener("basin:submission:success", function (e) {
    const form = e.target; // The submitted form
    const formId = form.id; // Unique ID on the form

    window.dataLayer = window.dataLayer || [];

    // Customize this logic to fit your form IDs
    switch (formId) {
      case "wf-form-formAskBuilderLifestyle":
        window.dataLayer.push({
          event: "askBuilderFormSuccess",
          askBuilderFormName: "Ask Builder - Lifestyle"
        });
        break;

      case "wf-form-formAskBuilderSchell":
        window.dataLayer.push({
          event: "askBuilderFormSuccess",
          askBuilderFormName: "Ask Builder - Schell Brothers"
        });
        break;

      case "wf-form-formAskBuilderStylecraft":
        window.dataLayer.push({
          event: "askBuilderFormSuccess",
          askBuilderFormName: "Ask Builder - Stylecraft"
        });
        break;
        
      case "wf-form-formAskBuilderLegault":
        window.dataLayer.push({
          event: "askBuilderFormSuccess",
          askBuilderFormName: "Ask Builder - Legault"
        });
        break;
        
      case "wf-form-formAskBuilderCovenant":
        window.dataLayer.push({
          event: "askBuilderFormSuccess",
          askBuilderFormName: "Ask Builder - Covenant"
        });
        break;
        
       case "wf-form-formAskBuilderHHHuntHomes":
        window.dataLayer.push({
          event: "askBuilderFormSuccess",
          askBuilderFormName: "Ask Builder - HHHunt Homes"
        });
        break;
        
       case "wf-form-formAskBuilderHomesmith":
        window.dataLayer.push({
          event: "askBuilderFormSuccess",
          askBuilderFormName: "Ask Builder - Homesmith"
        });
        break;

      default:
        window.dataLayer.push({
          event: "askBuilderFormSuccess",
          askBuilderFormName: "Unknown Form",
          formId: formId
        });
    }
  });