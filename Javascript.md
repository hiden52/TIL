# Javascript를 배우면서...


## 효율적인 코딩

### Logical operator
1. || 연산이나 && 연산 등에서 부담이되는 표현식을 뒤로 빼라!
    * 

## 새로 알게된 것들

### Function
1. Early return, early exit
    
    함수 내에서 if문이 존재할 때, 조건이 맞지 않는 경우
    `Early return`하여 최적화를 기대.
    ~~~javascript
    function upgradeUser(user) {
        if (user.point <= 10) {
            return; // Early return
        }
        // logic
    }
    ~~~
    