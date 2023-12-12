import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InsuranceInformation() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" sx={{ mt: 3, height: "30px", width: "400px" }} onClick={handleClickOpen}>
        Thông Tin Chi Tiết
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: "sticky", top: 0 }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Thông Tin Chi Tiết
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Đăng ký
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container>
          <Grid item xs={9}>
            <List sx={{ marginLeft: "8rem", mr: 1, height: "100%", backgroundColor: "#f7f7f7", pb: 5 }}>
              <Box sx={{ mt: 5, mx: 1 }}>
                <Typography variant="h6">Bảo hiểm sức khỏe gia đình</Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Mô tả: Bảo hiểm sức khỏe gia đình cung cấp bảo vệ cho toàn bộ gia đình trong trường hợp cần điều trị
                  y tế hoặc chăm sóc sức khỏe. Gói bảo hiểm này bao gồm các khoản bồi thường cho chi phí y tế, thuốc
                  men, khám chữa bệnh, và các dịch vụ khám sức khỏe định kỳ.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  {" "}
                  Quyền lợi (Benefits):
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Bồi thường chi phí y tế: Bảo hiểm sẽ chi trả một phần hoặc toàn bộ chi phí y tế của việc điều trị,
                  bao gồm cả viện phí, xét nghiệm, phẫu thuật, và các dịch vụ khám chữa bệnh khác.
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Thuốc men và dược phẩm: Bảo hiểm bao phần hoặc toàn bộ chi phí của thuốc men và dược phẩm cần thiết
                  trong quá trình điều trị.{" "}
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Khám sức khỏe định kỳ: Bảo hiểm cung cấp khoản bồi thường cho các cuộc khám sức khỏe định kỳ, giúp
                  phát hiện sớm các vấn đề sức khỏe và tăng cường phòng ngừa bệnh tật.{" "}
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Điều trị nước ngoài: Bảo hiểm bao gồm chi phí điều trị y tế khi bạn đi du lịch hoặc sống tại nước
                  ngoài.{" "}
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Chăm sóc nha khoa và mắt: Bảo hiểm bồi thường một phần hoặc toàn bộ chi phí chăm sóc nha khoa và
                  mắt, bao gồm cả việc khám, làm răng, và mua kính hoặc ống kính áp tròng.{" "}
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Phạm vi bảo hiểm: Gói bảo hiểm này bao gồm các vấn đề sức khỏe thông thường như bệnh tật, tai nạn,
                  nội khoa, ngoại khoa, và các dịch vụ chăm sóc sức khỏe khác theo quy định của chính sách.
                </Typography>

                <Typography variant="h6">Thời hạn bảo hiểm:</Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Gói bảo hiểm có thể có thời hạn từ 1 năm đến nhiều năm, tùy thuộc vào sự lựa chọn của khách hàng.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Phí bảo hiểm:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Phí bảo hiểm sẽ được tính dựa trên nhiều yếu tố như độ tuổi, giới tính, và lựa chọn phạm vi bảo
                  hiểm. Bảo hiểm có thể yêu cầu khách hàng thanh toán phí hàng tháng, hàng năm hoặc theo chu kỳ khác.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Điều kiện và loại trừ:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Để đảm bảo tính minh bạch, chính sách cần liệt kê rõ ràng các điều kiện và trường hợp không được bảo
                  hiểm, ví dụ như các bệnh mãn tính, bệnh lý di truyền, và các hành động tự tử.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Quy trình yêu cầu giải quyết bồi thường:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Chính sách cần cung cấp hướng dẫn về quy trình và thủ tục để yêu cầu bồi thường khi có yêu cầu bồi
                  thường. Điều này bao gồm việc liên hệ với công ty bảo hiểm, cung cấp các tài liệu và thông tin cần
                  thiết, và tuân thủ quy trình xử lý yêu cầu bồi thường.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Điều khoản và điều kiện:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Chính sách bảo hiểm sức khỏe sẽ đưa ra các điều khoản và điều kiện cụ thể, bao gồm cả các quy định
                  về chính sách hủy bỏ, chuyển nhượng, và điều chỉnh phạm vi bảo hiểm.
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Liên hệ:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  - Cung cấp thông tin liên hệ với công ty bảo hiểm, bao gồm số điện thoại, địa chỉ và email, để khách
                  hàng có thể liên hệ để tư vấn và hỗ trợ.
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />
              <Typography variant="h6" sx={{ my: 1 }}>
                Tài liệu bạn nên tham khảo
              </Typography>
              <ul>
                <li>
                  <Link
                    to="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://www.sunlife.com.vn/content/dam/sunlife/regional/vietnam/documents/bhbs-benh-hiem-ngheo-toan-dien-qtdk.pdf"
                    color="inherit"
                  >
                    <PictureAsPdfIcon /> Tiết Quy Tắc & điều khoản
                  </Link>
                </li>
                <li>
                  <Link
                    to="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://www.sunlife.com.vn/content/dam/sunlife/regional/vietnam/documents/bhbs-benh-hiem-ngheo-toan-dien-bang-ty-le-phi-bao-hiem.pdf"
                    color="inherit"
                  >
                    <PictureAsPdfIcon /> Tỉ lệ phí
                  </Link>
                </li>
                <li>
                  <Link to="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://www.sunlife.com.vn/content/dam/sunlife/regional/vietnam/documents/benh-hiem-ngheo-toan-dien-thong-tin-luu-y.pdf">
                    <PictureAsPdfIcon /> Thông Tin cần chú ý
                  </Link>
                </li>
              </ul>
            </List>
          </Grid>
          <Grid item xs={3}>
            <List sx={{ mt: 3, marginRight: "8rem", ml: 1, height: "500px" }}>
              <Card sx={{ maxWidth: 345, my: 5 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://images.pexels.com/photos/7735630/pexels-photo-7735630.jpeg?auto=compress&cs=tinysrgb&w=600"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Insurance Policy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345, my: 5 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://images.pexels.com/photos/7821498/pexels-photo-7821498.jpeg?auto=compress&cs=tinysrgb&w=600"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Insurance advisor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </List>
          </Grid>
        </Grid>
      </Dialog>
    </Box>
  );
}
