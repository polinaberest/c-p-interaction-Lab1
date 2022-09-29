Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('-');
  };

function initDate()
{
    let now = new Date();
    document.getElementById('start').value = now.yyyymmdd();
    document.getElementById('start').min = now.yyyymmdd();
    now.setDate(now.getDate()+1);
    document.getElementById('end').min = now.yyyymmdd();
}

function validateDate(){
    var fisrtDate = document.getElementById('start').value;
    var secondDate = document.getElementById('end').value;
    fisrtDate = fisrtDate.split("-");
    secondDate = secondDate.split("-");

    for(var i = 0; i < 3; i++)
    {
        if(fisrtDate[i]>secondDate[i])
        {
            return false;
        }
    }
    return true;
}

function makeValidate(){
    if(validateDate())
    {
        document.getElementById('nextButton').classList.remove('disabled');
    }
    else
    {
        document.getElementById('nextButton').classList.add('disabled');
    }
}
