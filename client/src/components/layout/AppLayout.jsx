import { Grid } from "@mui/material";
import Title from "../shared/Tital";
import ChatList from "../specific/ChatList";
import Header from "./Header";

// Higher-Order Component (HOC) for App Layout
const AppLayout = (WrappedComponent) => {
  const WithLayout = (props) => {
    return (
        <div>
            <Title/>
            <Header />
            <Grid container height={"calc(100vh - 4rem)"}>
                <Grid item
                    sm={4}
                    md={3}
                    sx={{ 
                        display:{xs:"none",sm:"block"},
                    }}
                    height={'100%'} ><ChatList chats={[1,2,3,4]}/></Grid>
                <Grid item xs={12} sm={8} md={5} lg={ 6} height={'100%'} bgcolor="primary.main">
                    <WrappedComponent {...props} />
                </Grid>
                <Grid item md={4} lg={3} height={'100%'}
                    sx={{
                        display: { xs: "none", lg: "block" },
                        padding:'2rem',
                        bgcolor:"rgba(0,0,0,0.85)"
                    }}
                >third</Grid>

            </Grid>
        
      </div>
    );
  };

  return WithLayout;
};

export default AppLayout;
