exports.replacePlaceholders = (body, user, customProperties) => {
    let emailBody = body;
  
    customProperties.forEach(prop => {
      const placeholder = `[${prop.title}]`;
      const value = user.properties.get(prop.title);
      emailBody = emailBody.replace(new RegExp(placeholder, 'g'), value);
    });
  
    return emailBody;
  };
  