import { Contract } from "@paperbits/common";
import { IModelBinder } from "@paperbits/common/editing";
import { ResetPasswordModel } from "./resetPasswordModel";
import { ResetPasswordContract } from "./resetPasswordContract";


export class ResetPasswordModelBinder implements IModelBinder<ResetPasswordModel> {
    public async contractToModel(contract: ResetPasswordContract): Promise<ResetPasswordModel> {
        const model = new ResetPasswordModel();
        model.requireHipCaptcha = contract.requireHipCaptcha;
        return model;
    }

    public modelToContract(model: ResetPasswordModel): Contract {
        const contract: ResetPasswordContract = {
            type: "reset-password",
            requireHipCaptcha: model.requireHipCaptcha
        };

        return contract;
    }
}
