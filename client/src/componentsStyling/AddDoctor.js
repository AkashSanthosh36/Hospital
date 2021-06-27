import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    accordion: {
        '&:nth-of-type(odd)': {
          backgroundColor: "#f3f2f8",
        },
        '&:nth-of-type(even)': {
          backgroundColor: "white",
        },
        marginBottom: '20px',
    },
    card: {
      padding: 20,
      width: '100%',
      textAlign: 'center',
    },
    textfield: {
      '& label.Mui-focused': {
          color: 'black',
      },
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#00000',
          },
          '&:hover fieldset': {
            borderColor: 'black',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black',
            borderLeftWidth: 6,
          },
      },
    marginBottom: 30,
    }, 
    number: {
      "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
          display: "none"
      },
    },
    button: {
        background: 'linear-gradient(45deg, #2193b0 30%, #6dd5ed 90%)',
        color: 'white',
    },
}));