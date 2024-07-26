// OnlineMembersList.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Card } from '@mui/material';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import SoftAvatar from 'components/SoftAvatar';
import SoftButton from 'components/SoftButton';
import { Link } from 'react-router-dom';

const OnlineMembersList = ({ members, onMemberClick }) => {
    return (
     <Card>
      <SoftBox p={2} borderLeft="1px solid #ddd">
        <SoftTypography variant="h6" gutterBottom>
          Online Members
        </SoftTypography>
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {members.map((member) => (
            <SoftBox
              key={member.id}
              component="li"
              display="flex"
              alignItems="center"
              py={1}
              mb={1}
              onClick={() => onMemberClick(member)}
              style={{ cursor: 'pointer' }}
            >
              <SoftBox mr={2}>
                <SoftAvatar src={member.avatar} alt={member.name} variant="rounded" shadow="md" />
              </SoftBox>
              <SoftBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                <SoftTypography variant="button" fontWeight="medium">
                  {member.name}
                </SoftTypography>
                <SoftTypography variant="caption" color="text">
                  {member.description}
                </SoftTypography>
              </SoftBox>
              <SoftBox ml="auto">
                {member.action.type === "internal" ? (
                  <SoftButton component={Link} to={member.action.route} variant="text" color="info">
                    {member.action.label}
                  </SoftButton>
                ) : (
                  <SoftButton
                    component="a"
                    href={member.action.route}
                    target="_blank"
                    rel="noreferrer"
                    variant="text"
                    color={member.action.color}
                  >
                    {member.action.label}
                  </SoftButton>
                )}
              </SoftBox>
            </SoftBox>
          ))}
        </ul>
      </SoftBox>
      </Card>
    );
  };
  
  OnlineMembersList.propTypes = {
    members: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        description: PropTypes.string,
        action: PropTypes.shape({
          type: PropTypes.string.isRequired,
          route: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          color: PropTypes.string,
        }),
      })
    ).isRequired,
    onMemberClick: PropTypes.func.isRequired,
  };
  
  export default OnlineMembersList;
