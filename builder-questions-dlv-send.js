document.addEventListener("basin:submission:success", function (e) {
  const form = e.target;
  const formId = form.id;

  window.dataLayer = window.dataLayer || [];

  let askBuilderFormName;

  switch (formId) {
    case "wf-form-formAskBuilderLifestyle":
      askBuilderFormName = "Ask Builder - Lifestyle";
      break;
    case "wf-form-formAskBuilderSchell":
      askBuilderFormName = "Ask Builder - Schell Brothers";
      break;
    case "wf-form-formAskBuilderStylecraft":
      askBuilderFormName = "Ask Builder - Stylecraft";
      break;
    case "wf-form-formAskBuilderLegault":
      askBuilderFormName = "Ask Builder - Legault";
      break;
    case "wf-form-formAskBuilderCovenant":
      askBuilderFormName = "Ask Builder - Covenant";
      break;
    case "wf-form-formAskBuilderHHHuntHomes":
      askBuilderFormName = "Ask Builder - HHHunt Homes";
      break;
    case "wf-form-formAskBuilderHomesmith":
      askBuilderFormName = "Ask Builder - Homesmith";
      break;
    default:
      askBuilderFormName = "Unknown Form";
      break;
  }

  window.dataLayer.push({
    event: "askBuilderFormSuccess",
    askBuilderFormName: askBuilderFormName,
    formId: formId
  });

  console.log(askBuilderFormName);
});
