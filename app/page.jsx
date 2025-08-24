<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <title>Feedback Form</title>
</head>
<body>
  <h1>اتركي ملاحظتك</h1>
  <form name="feedback" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="feedback" />
    <label>الاسم:
      <input type="text" name="name" value="Kholoud Khaled" />
    </label><br/>
    <label>البريد الإلكتروني:
      <input type="email" name="email" value="kholood@example.com" />
    </label><br/>
    <label>الرسالة:
      <textarea name="message">مرحبًا! هذه رسالة تجربة من خلود. 💖</textarea>
    </label><br/>
    <button type="submit">إرسال</button>
  </form>
</body>
</html>
