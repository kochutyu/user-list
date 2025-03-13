import {IAttributes, IAugmentedJQuery, IDirective, IFormController, INgModelController, IScope} from "angular";

/**
 * Extended Scope with Validation State
 */
interface IValidationScope extends IScope {
    submitted: boolean;
}

/**
 * Custom Directive for Form Validation
 */
export function ValidateFormDirective(): IDirective<IValidationScope, JQLite, IAttributes, IFormController> {
    return {
        restrict: "A",
        require: "?form",
        link: (
            scope: IValidationScope,
            element: IAugmentedJQuery,
            attrs: IAttributes,
            formCtrl?: IFormController
        ): void => {
            if (!formCtrl) return;

            scope.$watch("submitted", () => {
                Object.keys(formCtrl).forEach((fieldName) => {
                    console.log(fieldName)
                    if (fieldName[0] !== "$") {
                        const field = formCtrl[fieldName];
                        if (field && field.$setTouched) {
                            field.$setTouched();
                        }
                    }
                });

                scope.$applyAsync();
            });
        },
    };
}

interface IValidationMessageScope extends IScope {
    validationError: string;
    submitted: boolean;
}

export function ValidationMessageDirective(): IDirective<IValidationMessageScope, JQLite, IAttributes, INgModelController> {
    return {
        restrict: "A",
        require: "?ngModel", // ✅ Attach to input fields with ngModel
        link: (
            scope: IValidationMessageScope,
            element: IAugmentedJQuery,
            attrs: IAttributes,
            ngModel?: INgModelController
        ): void => {
            if (!ngModel) return; // ✅ Ensure ngModel exists before using it

            // 🔥 Validation Messages Map
            const errorMessages: Record<string, string> = {
                required: "This field is required.",
                email: "Please enter a valid email.",
                minlength: `Minimum length is ${attrs.ngMinlength || 8} characters.`,
                pattern: "Password must contain at least one letter and one number.",
                match: "Passwords do not match.",
            };

            // 🔄 Function to update the error message
            function updateError(): void {
                if (!scope.submitted) return; // ✅ Only show errors after form submission
                const errorType = Object.keys(ngModel?.$error || {})[0];
                scope.validationError = errorType ? errorMessages[errorType] || "" : "";
            }

            // 🔄 Watch for validation changes
            scope.$watch(() => ngModel.$error, updateError, true);
        },
        template: `<span class="form-box__error" ng-show="submitted && validationError">{{ validationError }}</span>`,
    };
}