import { Validators } from "../../../utils/validators";
import { FormModel } from "../../../components/Form";

export const LoginForm = (): FormModel[] => {
    return [
        {
            label: 'Email ID *',
            value: '',
            size: 'medium',
            autoFocus: true,
            type: 'text',
            typeValue: 'text',
            variant: 'outlined',
            placeholder: '',
            field: 'username',
            validators: [
                { check: Validators.required, message: 'This field is mandatory' },
                { check: Validators.email, message: 'Invalid Email ID' },
            ],
            responsive: { xs: 12 },
            required: true,
        },
        {
            label: 'Password *',
            value: '',
            size: 'medium',
            type: 'text',
            typeValue: 'password',
            variant: 'outlined',
            placeholder: '',
            field: 'password',
            sx: { 'mt': 2, mb: 5 },
            validators: [
                { check: Validators.required, message: 'This field is mandatory' },
            ],
            responsive: { xs: 12 },
            required: true,
        },
    ];
}
