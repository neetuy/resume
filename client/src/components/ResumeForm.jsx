import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {lightBlue50, lightBlue900} from 'material-ui/styles/colors'



const styles = {
  
  cardWidth: {
  	width: "100%",
  },
  
};


const ResumeForm = ({ secretData }) => (

  <Card className="container" style={styles.cardWidth}>
  <CardMedia className="text-center"
      overlay={<CardTitle title="Resume" />}
    >
    <img src="./img/background.jpg" style={{height:'440px'}} />
    </CardMedia>
    <CardTitle title="Neetu" />
    
    
    <Card >
      <CardHeader
      	titleStyle={{'fontSize':'20px', 'fontWeight':'bold','backgroundColor':lightBlue50}}
      	titleColor={lightBlue900}
        title="Address"
      />
      <CardText 
      className="padding-text"
      >
       <div className="padding-text">
      	<ul>
      	<li>
      	<b>E-mail</b> neetuy1455@gmail.com
      	</li>
      	<li>
      	<b>Contact-No</b> 8010442363
      	</li>
      	</ul>
      </div>
      </CardText>
      <CardHeader
     	titleStyle={{'fontSize':'20px', 'fontWeight':'bold','backgroundColor':lightBlue50}}
      	titleColor={lightBlue900}
      	title="carrier summary"
      />
      <CardText
      >
      <div>
      	<ul>
      	<li>
      	
      	</li>
      	<li>
      	Excellent at assessing the resources and identifying the oppurtunities.
      	</li>
      	<li>
      	Excellent in coordinating with seniors and taking orders.
      	</li>
      	
      	</ul>
      </div>
      </CardText>
      <CardHeader
     	titleStyle={{'fontSize':'20px', 'fontWeight':'bold', 'padding':'5px','backgroundColor':lightBlue50}}
      	titleColor={lightBlue900}
      	title="Personal Qualities"
      />
      <CardText
      >
      <div>
      	<ul>
      	<li>
      	Strong motivational skills
      	</li>
      	<li>
      	Good Conceptual, Analytical and Logical skills.
      	</li>
      	<li>
      	Ability to give the best result in pressure situations
      	</li>
      	<li>
      	Hard working
      	</li>
      	<li>
      	Ability to work individual as well as in team.
      	</li>
      	</ul>
      </div>
      </CardText>
      <CardHeader
      	titleStyle={{'fontSize':'20px', 'fontWeight':'bold','backgroundColor':lightBlue50}}
      	titleColor={lightBlue900}
      	title="Employers"
      />
      <CardText
      >
      <div>
      	<ul>
      	<li>
      	Working as Trainee in Bridge Connectivity Solution in  present.
      	</li>
      	<li>
      	Worked as Teacher  in Murari Lal Public in 20016
      	</li>
      	</ul>
      </div>
      </CardText>

      <CardHeader
      	titleStyle={{'fontSize':'20px', 'fontWeight':'bold','backgroundColor':lightBlue50}}
      	titleColor={lightBlue900}
      	title="Educational Qualification "
      />
      <CardText
      >
      <div>
      	<ul>
      	<li>
      	Bachelors of Tachnology  from Satya College Of Engineering and Technology with 70%.
      	</li>
      	<li>
      	12th From Vindya Mandir School Faridabad with 72%.
      	</li>
      	<li>
      	10th From Tarun Niketan Public School School Faridabad with 78%.
      	</li>
      	</ul>
      </div>
      </CardText>
       <CardHeader
      	titleStyle={{'fontSize':'20px', 'fontWeight':'bold','backgroundColor':lightBlue50}}
      	titleColor={lightBlue900}
      	title="Employers"
      />
      <CardText
      >
      <div>
      	<ul>
      	<li>
      	Working as Trainee in Bridge Connectivity Solution in  present.
      	</li>
      	<li>
      	Worked as Teacher  in Murari Lal Public in 20016
      	</li>
      	</ul>
      </div>
      </CardText>

      <CardHeader
      	titleStyle={{'fontSize':'20px', 'fontWeight':'bold','backgroundColor':lightBlue50}}
      	titleColor={lightBlue900}
      	title="Technical Knowledge "
      />
      <CardText
      >
      <div>
      	<ul>
      	<li>
      	Good in MS Office (MS Word, MS Excel, MS PowerPoint).
      	</li>
      	<li>
      	Proficient in HTML, CSS, Bootstrap and React.
      	</li>
      	<li>
      	Knowledge of database mysql.
      	</li>
      	</ul>
      </div>
      </CardText>


      <CardHeader
      	titleStyle={{'fontSize':'20px', 'fontWeight':'bold','backgroundColor':lightBlue50}}
      	titleColor={lightBlue900}
      	title="Personal Details "
      />
      <CardText
      >
      <div>
      	<ul>
      	<li>
      	<b>Father's Name :- </b> Mr. Kaptan Singh Yadav
      	</li>
      	<li>
      	<b>Mother's Name :- </b> Mrs. Pushpa Devi
      	</li>
      	<li>
      	<b>Date Of Birth :-</b> 20-December-1993
      	</li>
      	<li>
      	<b>Language Known :-</b> Hindi , English
      	</li>
      	<li>
      	<b>Hobbies :- </b> listening music , Dancing , Travelling
       	</li>
       	<li>
      	<b>Address :- </b> Jagram Sarpanch Colony , Palla no. 1 Faridabad.
       	</li>

      	</ul>
      </div>
      </CardText>

    </Card>
  	
  </Card>
  
);

// ResumeForm.propTypes = {

// };

export default ResumeForm;
