export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action');
    }
}