export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action');
    }
}