import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Stepper from "../components/Stepper";
import { FormStep } from "../models/Enums";
import PersonalForm from "./Context/PersonalForm";
import AccountForm from "./Context/AccountForm";
import ConfirmForm from "./Context/ConfirmForm";

const HookContext = () => {
  const [step, setStep] = useState<FormStep>(0);
  const methods = useForm();

  const nextStep = useCallback(() => {
    if (step === FormStep.CONFIM) {
      return;
    }
    setStep((prev) => prev + 1);
  }, [step]);

  const previousStep = useCallback(() => {
    if (step === FormStep.PERSONAL) {
      return;
    }
    setStep((prev) => prev - 1);
  }, [step]);

  const renderForm = useCallback(() => {
    switch (step) {
      case FormStep.PERSONAL:
        return <PersonalForm nextStep={nextStep} />;
      case FormStep.ACCOUNT:
        return <AccountForm nextStep={nextStep} previousStep={previousStep} />;
      case FormStep.CONFIM:
        return <ConfirmForm />;
      default:
        return null;
    }
  }, [nextStep, previousStep, step]);

  return (
    <FormProvider {...methods}>
      <Stepper currentStep={step} />
      <div className="pt-4">{renderForm()}</div>
      <div className="text-2xl text-black">{step}</div>
    </FormProvider>
  );
};

export default HookContext;
