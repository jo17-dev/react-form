import { 
  ChakraProvider,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightAddon,
  Checkbox,
  CheckboxGroup,
  Stack,
  Image
} from '@chakra-ui/react';
import {
  ViewIcon,
  ViewOffIcon
} from '@chakra-ui/icons';
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword]=useState("");
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setpasswordError] = useState(true);
  const blueColor = "rgb(0, 110, 250)";
  // const errorColor="red";

  const handleRemember = ()=>{
    setRemember(!remember);
  }

  const handleEmail = (e: any)=>{
    setEmail(e.target.value);
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if ( emailPattern.test(e.target.value) ){
      setEmailError(false)
    }else{
      setEmailError(true);
    }
  }

  const handlePassword = (e: any)=>{
    setPassword(e.target.value);

    let passwordpattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{4,}$/;

    if(passwordpattern.test(e.target.value) && password!=""){
      setpasswordError(false);
    }else{
      setpasswordError(true);
    }
  }

  return (
    <ChakraProvider>
      <form action="" className='form'>
        <Heading>Sign in 👋</Heading>
        <Text fontSize='md'>Sign in with your data that entered during your registration</Text>
        <Stack spacing={2}>
          <Stack spacing={0}>
            <Text size='md'>Email adress</Text>
            <Input variant='Outline' placeholder='example@gmail.com'
              type='email' 
              name='email'
              _focus={
                {borderBottom: emailError && email!="" ? "2px solid red" : undefined }
              }
              border="1px solid var(--grey)"
              value={email} 
              onChange={handleEmail}
              />
          </Stack>

          <Stack>
            <Text>Password</Text>
            <InputGroup border="1px solid var(--grey)">
              <Input   type={ show ? 'text' : 'password' } 
                variant='Outline' 
                name='password'
                value={password}
                onChange={handlePassword}
                borderBottom={passwordError && password!="" ? "2px solid red" : undefined } 
              ></Input>
              <InputRightAddon border="none">
                <button type='button' onClick={()=>{setShow(!show)}} > {show ? <ViewOffIcon /> : <ViewIcon /> } </button>
              </InputRightAddon>
            </InputGroup>
          </Stack>

          <Stack direction="row" justifyContent="space-between" >
            <CheckboxGroup>
              <Checkbox  onChange={handleRemember} >Remember me</Checkbox>
            </CheckboxGroup>

            <a href="#" className="link">Forgot password ?</a>
          </Stack>

          <Stack align={"Center"}>
            <Input type="submit" value="Sign in" 
            backgroundColor={blueColor}
            color="white"
            cursor="pointer"
            fontWeight="bolder"
            _hover={{backgroundColor: "rgb(73, 152, 255)", border: "none"}}
            />
          </Stack>
          
          <Stack align='center' justifyContent="space-around" direction="row">
            <span className='horizontal-line'></span>
            <Text>Or</Text>
            <span className='horizontal-line'></span>
          </Stack>

          <Stack alignItems="center" justifyContent="space-around" direction="row">
            <div className="img-container">
              <Image width="30%" objectFit="cover" boxSize="30px" cursor="pointer"  src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" />
            </div>
            <div className="img-container">
              <Image width="30%" objectFit="cover" boxSize="40px" cursor="pointer"  src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-desktop.jpg" />
            </div>
            <div className="img-container">
              <Image width="30%" objectFit="cover" boxSize="30px" cursor="pointer"  src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png" />
            </div>
          </Stack>

        </Stack>
      </form>

    </ChakraProvider>
  )
}

export default App
