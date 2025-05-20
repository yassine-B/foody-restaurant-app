import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { footerFormStyles } from './Styles';
import { Button } from '@src/Components/Button';

const ErrorMessage = ({ message }: { message: string }) => {
  return <p className="text-red-600 text-left">{message}</p>;
};

function FooterForm() {
  const { t, i18n } = useTranslation('footer');
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, touchedFields, isSubmitted }
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  const formValidation = {
    username: {
      name: 'username',
      required: t('footer.feedback_form.inputs.username.required'),
      maxLength: {
        value: 50,
        message: t('footer.feedback_form.inputs.username.maxLength')
      },
      placeholder: t('footer.feedback_form.inputs.username.placeholder')
    },
    email: {
      name: 'email',
      required: t('footer.feedback_form.inputs.email.required'),
      pattern: {
        value: /^\S+@\S+$/i,
        message: t('footer.feedback_form.inputs.email.pattern')
      },
      placeholder: t('footer.feedback_form.inputs.email.placeholder')
    },
    phone: {
      name: 'phone',
      required: t('footer.feedback_form.inputs.phone.required'),
      pattern: {
        value: /^[0-9]*$/,
        message: t('footer.feedback_form.inputs.phone.pattern')
      },
      minLength: { value: 6, message: t('footer.feedback_form.inputs.phone.minLength') },
      maxLength: { value: 15, message: t('footer.feedback_form.inputs.phone.maxLength') },
      placeholder: t('footer.feedback_form.inputs.phone.placeholder')
    },
    message: {
      name: 'message',
      required: t('footer.feedback_form.inputs.message.required'),
      maxLength: {
        value: 200,
        message: t('footer.feedback_form.inputs.message.maxLength')
      },
      placeholder: t('footer.feedback_form.inputs.message.placeholder')
    }
  };

  useEffect(() => {
    trigger();
  }, [i18n.language, trigger]);

  return (
    <form className={`${footerFormStyles.form_container}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <input
          type="text"
          {...register(formValidation.username.name, {
            required: formValidation.username.required,
            maxLength: formValidation.username.maxLength
          })}
          placeholder={formValidation.username.placeholder}
          className={`${footerFormStyles.form_input}`}
        />
        {(isSubmitted || touchedFields.username) && errors.username && (
          <ErrorMessage message={errors.username.message} />
        )}
      </div>
      <div className="w-full">
        <input
          className={`${footerFormStyles.form_input}`}
          {...register(formValidation.email.name, {
            required: formValidation.email.required,
            pattern: formValidation.email.pattern
          })}
          placeholder={formValidation.email.placeholder}
          type="email"
        />
        {(isSubmitted || touchedFields.email) && errors.email && (
          <ErrorMessage message={errors.email.message} />
        )}
      </div>
      <div className="w-full">
        <input
          className={`${footerFormStyles.form_input}`}
          {...register(formValidation.phone.name, {
            required: formValidation.phone.required,
            pattern: formValidation.phone.pattern,
            minLength: formValidation.phone.minLength,
            maxLength: formValidation.phone.maxLength
          })}
          placeholder={formValidation.phone.placeholder}
          type="phone"
        />
        {(isSubmitted || touchedFields.phone) && errors.phone && (
          <ErrorMessage message={errors.phone.message} />
        )}
      </div>
      <div className="w-full">
        <textarea
          className={`${footerFormStyles.form_input}`}
          {...register(formValidation.message.name, {
            required: formValidation.message.required,
            maxLength: formValidation.message.maxLength
          })}
          placeholder={formValidation.message.placeholder}
          rows={5}
        />
        {(isSubmitted || touchedFields.message) && errors.message && (
          <ErrorMessage message={errors.message.message} />
        )}
      </div>

      <Button type="submit" shape="normal" bgColor="black">
        {t('footer.feedback_form.feedback_button_title')}
      </Button>
    </form>
  );
}

export default FooterForm;
