import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container,
     Grid,
     Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import TextField from './FormsUI/TextField'
import Select from './FormsUI/Select'
import DateTimePicker from "./FormsUI/DateTimePicker";
import Checkbox from './FormsUI/Checkbox'
import Button from './FormsUI/Button'
import choice from "./data/choice.json"

const INITIAL_FORM_STATE={
    height:'',
    weight:'',
    BMI:'',
    pulse:'',
    bloodPressure1:'',
    bloodPressure2:'',
    disease1: '',
    disease2:'',
    choice1:'',
    choice2:'',
    drug:'',
    pregnant:'',
}

const FORM_VALIDATION=Yup.object().shape({
    height: Yup.number()
    .required('Yêu cầu nhập thông tin này'),
    weight: Yup.number()
    .required('Yêu cầu nhập thông tin này'),
    BMI: Yup.number()
    .required('Yêu cầu nhập thông tin này'),
    pulse: Yup.number()
    .required('Yêu cầu nhập thông tin này'),
    bloodPressure1: Yup.number()
    .required('Yêu cầu nhập thông tin này'),
    bloodPressure2: Yup.number()
    .required('Yêu cầu nhập thông tin này'),
    disease1: Yup.string(),
    disease2: Yup.string(),
    choice1: Yup.string()
    .required('Vui lòng chọn thông tin'),
    choice2: Yup.string()
    .required('Vui lòng chọn thông tin'),
    pregnant: Yup.string(),
    drug: Yup.string(),
    termsOfInformation: Yup.boolean()
    .oneOf([true], "Bạn cam kết thông tin là hoàn toàn chính xác")
    .required("Vui lòng cam kết thông tin")
});


function InsuranceForm2(): JSX.Element {
    return(
        <Container maxWidth= 'md' >
        <Formik
            initialValues={{
            ...INITIAL_FORM_STATE}}
            validationSchema={FORM_VALIDATION}
            onSubmit={values=>{
                console.log(values)
            }}
        >
            <Form>
                <Grid container spacing={2}>
                <Grid item xs ={12}>
                        <Typography variant="h6">Tiền sử gia đình: </Typography>
                    </Grid>

                    <Grid item xs ={12}>
                        <Typography paragraph={true}>
                        Có ai trong gia đình ông (bà) mắc một trong các bệnh: truyền nhiễm, tim mạch, đái tháo đường, lao, hen phế quản, ung thư, động kinh, rối loạn tâm thần,  bệnh khác:  (Nếu "có" đề nghị ghi cụ thể tên bệnh)
                        </Typography>
                    </Grid>

                    <Grid item xs ={6}>
                    <Select
                            name='choice1'
                            label='Lựa chọn'
                            options= {choice}
                        />
                    </Grid>

                    <Grid item xs ={6}>
                        <TextField
                        name ="disease1"
                        label="Bệnh"
                        />
                    </Grid>

                    <Grid item xs ={12}>
                        <Typography variant="h6">Tiền sử bản thân: </Typography>
                    </Grid>

                    <Grid item xs ={12}>
                        <Typography paragraph={true}>
                        Ông (bà) đã/đang mắc bệnh, tình trạng bệnh nào sau đây không: Bệnh truyền nhiễm, bệnh tim mạch, đái tháo đường, lao, hen phế quản, ung thư, động kinh, rối loạn tâm thần, bệnh khác.(Nếu "có" đề nghị ghi cụ thể tên bệnh)
                        </Typography>
                    </Grid>

                    <Grid item xs ={6}>
                    <Select
                            name='choice2'
                            label='Lựa chọn'
                            options= {choice}
                        />
                    </Grid>

                    <Grid item xs ={6}>
                        <TextField
                        name ="disease1"
                        label="Bệnh"
                        />
                    </Grid>
                    <Grid item xs ={12}>
                        <Typography variant="h6">Câu hỏi khác (Nếu có): </Typography>
                    </Grid>

                    <Grid item xs ={12}>
                        <Typography paragraph={true}>
                        Ông (bà) có đang điều trị bệnh gì không? Nếu có, xin hãy liệt kê các thuốc đang dùng và liều lượng:
                        </Typography>
                    </Grid>

                    <Grid item xs ={12}>
                        <TextField
                        name ="drug"
                        label="Thông tin"
                        multiline= {true}
                        rows={3}
                        />
                    </Grid>
                    <Grid item xs ={12}>
                        <Typography paragraph={true}>
                        Tiền sử thai sản (Đối với phụ nữ):
                        </Typography>
                    </Grid>

                    <Grid item xs ={12}>
                        <TextField
                        name ="pregnant"
                        label="Thông tin"
                        multiline= {true}
                        rows={3}
                        />
                    </Grid>

                    <Grid item xs ={12}>
                        <Typography variant="h6">
                            Phiếu sức khỏe
                        </Typography>
                    </Grid>

                    <Grid item xs ={4}>
                    <TextField 
                    name="height" 
                    label="Chiều cao"
                    />
                    </Grid>

                    <Grid item xs ={4}>
                    <TextField 
                    name="weight" 
                    label="Cân nặng"
                    />
                    </Grid>

                    <Grid item xs ={4}>
                    <TextField 
                    name="BMI" 
                    label="Chỉ số BMI"
                    />
                    </Grid>

                    <Grid item xs ={12}>
                    <TextField 
                    name="pulse" 
                    label="Mạch đập(Lần/Phút)"
                    />
                    </Grid>

                    <Grid item xs ={12}>
                    <Typography>Huyết áp</Typography>
                    </Grid>
                    <Grid item xs ={12}>
                        <Grid container spacing={1} alignItems="center">
                    <Grid item xs ={5}>
                    <TextField 
                    name="bloodPressure1" 
                    label="Huyết áp"
                    />
                    </Grid>

                    <Grid item xs={2}>
                    <Typography textAlign="center">/</Typography>
                    </Grid>

                    <Grid item xs ={5}>
                    <TextField 
                    name="bloodPressure2" 
                    label="mmHg"
                    />
                    </Grid>
                    </Grid>
                    </Grid>

                    <Grid item xs ={12}>
                        <Typography sx={{color:"red"}}>
                            Các thông tin còn lại về phiếu khám lâm sàng vui lòng gửi về Địa chỉ tòa nhà 1, số 15, phường Bến Nghé, quận 1, Thành phố Hồ Chí Minh hoặc chi nhánh nào gần bạn nhất. Chúng tôi sẽ liên hệ và hỗ trợ trong
                            vòng 1-2 ngày trong thời gian làm việc. 
                        </Typography>
                    </Grid>

                    <Grid item xs ={12}>
                        <Checkbox name="termsOfInformation"
                            legend="Yêu cầu về thông tin"
                            label = "Tôi xin cam đoan những điều khai trên đây hoàn toàn đúng với sự thật theo sự hiểu biết của tôi."
                        />
                    </Grid>
                    
                    <Grid item xs ={12} sx={{marginBottom:"50px"}}>
                        <Button 
                        component={Link}
                        to="/"
                        variant="outlined"
                        >
                            Hoàn thành

                        </Button>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
        </Container>
    );
}

export default InsuranceForm2