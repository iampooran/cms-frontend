import React, { Component, ReactElement } from "react";
import InputField from "../inputField";
import { Grid, TextFieldProps } from "@mui/material";
import "./form.scss";
import DropDownInput from "../DropDownInput";
import DateInput from "../DateInput/DateInput";
import dayjs from "dayjs";
import RadioInput from "../RadioInput";
import MultiSelect from "../MultiSelect/MultiSelect";
import TextEditor from "../TextEditor/Index";
import Upload from "../Upload/Upload";
import File from "../File";
import DividerLine from "../Divider/DividerLine";

export interface FormValidators {
  check: any;
  message: string;
  num?: number;
}

export interface FormModel {
  field: any;
  label: string;
  placeholder?: string;
  required: boolean;
  validators: FormValidators[];
  value: string | number;
  disabled?: boolean;
  styleClass?: string;
  responsive?: any;
  autoFocus?: any;
  variant?: any;
  size?: any;
  inputProps?: any;
  typeValue?: any;
  type?: any;
  options?: any;
  style?: any;
  className?: string;
  sx?: any;
  disablePast?: boolean;
  disableFuture?: boolean;
  multiline?: boolean;
  rows?: number | undefined | string;
  defaultValue?: any;
  dropdownData?: any
  isMulti?: boolean,
  handledeleteImage?: (id: number) => void
}

export interface FormDataModel {
  [key: string]: string | number | boolean;
}

interface FormProps {
  isFormUpdated?: boolean;
  values: any;
  model: FormModel[];
  strings?: any
  testId?: string;
  onChange?: (
    field: string,
    value: string,
    formData: FormDataModel,
    deleted?: any
    // isFormValid: boolean
  ) => void;
  card?: any;
  hasError?: boolean;
  fieldError?: boolean;
  dropdownData?: any,
}

export default class Form extends Component<FormProps> {
  state: { formData: FormDataModel; isFormValid: boolean } = {
    formData: {},
    isFormValid: false,
  };

  componentDidMount() {
    this.prepareFormData();
  }

  componentDidUpdate(prevProps: Readonly<FormProps>) {
    const { values, strings } = this.props;
    if (
      this.props.isFormUpdated !== prevProps.isFormUpdated ||
      strings !== prevProps.strings ||
      (values && Object.keys(values).length > 0 && values !== prevProps.values)
    ) {
      this.prepareFormData();
    }
  }

  handleChange = (
    value: string,
    field: string,
    error?: { error: boolean; message: string },
    deleted?: any
  ) => {
    const formData: any = this.state.formData;
    formData[field] = value;
    if (deleted?.deletedField === field) {
      formData[field + "deleted"] = deleted?.DeletedFile;
    }
    formData[field + "Error"] = error && error.error;
    this.setState({
      formData,
      isFormValid: this.validateForm(formData),
    });
    if (this.props.onChange) {
      // const isFormValid = this.validateForm(formData);
      this.props.onChange(field, value, formData, deleted);
    }
  };

  validateForm = (formData: FormDataModel) => {
    const { model } = this.props;
    let isFormValid = true;
    model.forEach((item) => {
      if (item.required || formData[item.field + "Error"]) {
        isFormValid = isFormValid && !formData[item.field + "Error"];
      }
    });
    return isFormValid;
  };

  getFormData = () => {
    const { formData, isFormValid } = this.state;
    return { formData, isFormValid };
  };

  resetForm = () => {
    this.prepareFormData();
  };

  prepareFormData() {
    const { model, values } = this.props;
    const formData: FormDataModel = {};
    if (values && Object.keys(values).length !== 0) {
      model.forEach((item) => {
        formData[item.field] =
          values &&
            (values[item.field] || values[item.field] === 0) &&
            values[item.field] !== ""
            ? values[item.field]
            : "";
        if (formData[item.field] || !item.required) {
          formData[item.field + "Error"] = values && values[item.field] && values[item.field && item.field !== ''] && item.required ? true : false;
        } else {
          formData[item.field + 'Error'] =
            values && values[item.field] && values[item.field && item.field !== ''] && item.required ? false : true;
        }
      });
      this.setState({ formData, isFormValid: this.validateForm(formData) });
    } else {
      model.forEach((item) => {
        formData[item.field] =
          values && values[item.field] ? values[item.field] : "";
        formData[item.field + "Error"] = item.required;
      });

      this.setState({ formData, isFormValid: this.validateForm(formData) });
    }
  }

  renderFormFields() {
    const { model, hasError, dropdownData } = this.props;
    const { formData } = this.state;
    const arrayOfFields: ReactElement[] = [];
    model.forEach((item, key) => {
      switch (item.type) {
        case "text":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <InputField
                disabled={item.disabled || false}
                autoFocus={item.autoFocus || false}
                variant={item.variant}
                size={item.size}
                inputProps={item.inputProps || {}}
                hasError ={hasError || false}
                field={item.field}
                multiline={item.multiline}
                rows={item.rows}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field] as string)
                    : ""
                }
                style={item.style}
                typeValue={item.typeValue || ""}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                validators={item.validators}
                className={item.className}
                textChange={this.handleChange}
                sx={item.sx}
              />
            </Grid>
          );
          break;
        case "file":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <File
                inputProps={item.inputProps || {}}
                hasError={hasError || false}
                field={item.field}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field] as string)
                    : ""
                }
                typeValue={item.typeValue || ""}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                validators={item.validators}
                className={item.className}
                textChange={this.handleChange}
                sx={item.sx}
              />
            </Grid>
          );
          break;
        case "upload":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <Upload
                inputProps={item.inputProps || {}}
                hasError={hasError || false}
                field={item.field}
                multiline={item.multiline}
                handledeleteImage={item.handledeleteImage}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field] as any)
                    : []
                }
                style={item.style}
                typeValue={item.typeValue || ""}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                validators={item.validators}
                textChange={this.handleChange}
                sx={item.sx}
              />
            </Grid>
          );
          break;
        case "drop-down":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <DropDownInput
                options={item.options}
                className={""}
                id={""}
                style={item.style}
                labelId={""}
                disabled={item.disabled || false}
                inputProps={item.inputProps || {}}
                hasError={hasError || false}
                field={item.field}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field] as string)
                    : ""
                }
                placeholder={item.placeholder}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                validators={item.validators}
                onChange={this.handleChange}
                size={item.size}
              />
            </Grid>
          );
          break;
        case "select":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <MultiSelect
                options={dropdownData && dropdownData[item.field]}
                className={item.className}
                id={""}
                style={item.style}
                labelId={""}
                isMulti={item.isMulti}
                disabled={item.disabled || false}
                inputProps={item.inputProps || {}}
                hasError={hasError || false}
                field={item.field}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field] as string)
                    : ""
                }
                placeholder={item.placeholder}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                validators={item.validators}
                onChange={this.handleChange}
              />
            </Grid>
          );
          break;
        case "textEditor":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <TextEditor
                hasError={hasError || false}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                validators={item.validators}
                label={item.label}
                field={item.field}
                onChange={this.handleChange}
                value={formData[item.field] ? formData[item.field] : ''}
              />
            </Grid>
          );
          break;
        case "divider":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <DividerLine sx={item.sx} />
            </Grid>
          );
          break;
        case "radio":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <RadioInput
                options={item.options}
                className={""}
                id={""}
                style={item.style}
                labelId={""}
                defaultValue={formData[item.field] || formData[item.field] === 0
                  ? (formData[item.field] as string)
                  : false}
                disabled={item.disabled || false}
                inputProps={item.inputProps || {}}
                hasError={hasError || false}
                field={item.field}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field] as string)
                    : false
                }
                placeholder={item.placeholder}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                validators={item.validators}
                onChange={this.handleChange}
                size={item.size}
              />
            </Grid>
          );
          break;
        case "date":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <DateInput
                label={item.label}
                validators={item.validators}
                textChange={this.handleChange}
                value={
                  formData[item.field] || formData[item.field] === 0
                    ? dayjs(new Date(formData[item.field] as string))
                    : null
                }
                field={item.field}
                className={item.className}
                size={item.size}
                onChange={(e : any) => e}
                disablePast={item.disablePast}
                disableFuture={item.disableFuture}
                placeholder={item.placeholder}
                hasError={hasError || false}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                renderInput={(params: TextFieldProps) => (
                  <InputField
                    size={item.size}
                    hasError={hasError || false}
                    inputValue={params.value as string}
                    fieldError={
                      item.field
                        ? (formData[item.field + "Error"] as boolean)
                        : false
                    }
                    {...params}
                  />
                )}
              />
            </Grid>
          );
          break;

        default:
          break;
      }
    });

    return arrayOfFields;
  }

  render() {
    return <>{this.renderFormFields()}</>;
  }
}
