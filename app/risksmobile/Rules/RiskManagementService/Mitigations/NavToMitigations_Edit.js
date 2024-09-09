export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Mitigations'
                },
                'OnSuccess': '/risksmobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action');
    }
}