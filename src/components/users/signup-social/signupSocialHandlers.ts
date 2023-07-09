﻿import { IWidgetHandler } from "@paperbits/common/editing";
import { StyleDefinition } from "@paperbits/common/styles";
import { SignupSocialModel } from "./signupSocialModel"; import * as DefaultStyleDefinitions from "../../defaultStyleDefinitions";

export class SignupSocialHandlers implements IWidgetHandler {
    public async getWidgetModel(): Promise<SignupSocialModel> {
        return new SignupSocialModel()
    }

    public getStyleDefinitions(): StyleDefinition {
        return {
            components: {
                signupSocial: {
                    displayName: "Signup",
                    plugins: ["background", "typography", "margin", "padding"],
                    components: {
                        signupSocialButton: DefaultStyleDefinitions.getButtonStyleDefinition(),
                        widgetText: DefaultStyleDefinitions.getWidgetTextStyleDefinition(),
                        input: DefaultStyleDefinitions.getInputStyleDefinition(),
                        termsOfUseTextarea: DefaultStyleDefinitions.getTermsOfUseTextAreaDefinition(),
                        termsOfUseCheckbox: DefaultStyleDefinitions.getTermsOfUseCheckboxDefinition(),
                    }
                }
            }
        };
    }
}