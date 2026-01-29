# 🚀 دليل الإعداد الكامل - CID Consulting Platform

## 📋 المتطلبات الأساسية

### للتطوير المحلي:
- **Python 3.11+** - للـ Backend
- **Node.js 18+** - للـ Frontend
- **PostgreSQL 15+** - قاعدة البيانات
- **Git** - للتحكم بالإصدارات
- **Docker & Docker Compose** (اختياري لكن موصى به)

### للإنتاج:
- خادم Linux (Ubuntu 22.04 موصى به)
- Domain name مع SSL
- Stripe أو PayMob account

---

## 🏗️ هيكل المشروع

```
cid-consulting/
├── backend/                  # FastAPI Backend
│   ├── main.py              # FastAPI app
│   ├── database.py          # Database config
│   ├── models.py            # SQLAlchemy models
│   ├── auth.py              # Authentication
│   ├── routers/             # API endpoints
│   │   ├── auth.py
│   │   ├── bookings.py
│   │   └── payments.py
│   ├── requirements.txt
│   ├── .env                 # Environment variables (don't commit!)
│   └── Dockerfile
│
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── api/            # API integration
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── .env                # Frontend env vars
│   └── Dockerfile
│
├── docker-compose.yml       # Development setup
├── docker-compose.prod.yml  # Production setup
└── README.md
```

---

## ⚡ الإعداد السريع (Development)

### الطريقة 1: باستخدام Docker (الأسهل)

```bash
# 1. Clone المشروع
git clone https://github.com/your-username/cid-consulting.git
cd cid-consulting

# 2. إنشاء ملف .env للـ Backend
cd backend
cp .env.example .env

# عدل الملف وأضف:
# JWT_SECRET_KEY=your-random-secret-key-here
# STRIPE_SECRET_KEY=your-stripe-key
# DATABASE_URL=postgresql://postgres:postgres@db:5432/cid_consulting

# 3. تشغيل كل شيء بأمر واحد
cd ..
docker-compose up -d

# 4. انتظر 30 ثانية، ثم افتح المتصفح:
# Frontend: http://localhost
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/api/docs
```

### الطريقة 2: إعداد يدوي

#### Backend Setup:

```bash
# 1. إنشاء PostgreSQL database
sudo -u postgres psql
CREATE DATABASE cid_consulting;
CREATE USER cid_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE cid_consulting TO cid_user;
\q

# 2. Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. تثبيت المكتبات
pip install -r requirements.txt

# 4. إنشاء .env
cp .env.example .env
# عدل القيم المطلوبة

# 5. تشغيل الـ Backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

#### Frontend Setup:

```bash
# في terminal جديد
cd frontend

# 1. تثبيت المكتبات
npm install

# 2. إنشاء .env
cp .env.example .env
# أضف:
VITE_API_URL=http://localhost:8000/api
VITE_STRIPE_PUBLIC_KEY=your-stripe-public-key

# 3. تشغيل Frontend
npm run dev
```

---

## 🔐 إعداد المتغيرات البيئية (Environment Variables)

### Backend (.env):

```bash
# إلزامي - أمان
JWT_SECRET_KEY=<generate-with-python-secrets>
DATABASE_URL=postgresql://user:password@localhost:5432/cid_consulting

# إلزامي - Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# إلزامي - CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173

# اختياري
ENVIRONMENT=development
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

#### توليد JWT Secret:
```bash
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

### Frontend (.env):

```bash
VITE_API_URL=http://localhost:8000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

---

## 🗄️ إعداد قاعدة البيانات

### الإنشاء التلقائي:
```bash
# البرنامج ينشئ الجداول تلقائياً عند أول تشغيل
# لكن للتحكم الأفضل، استخدم Alembic:

cd backend

# 1. تثبيت Alembic
pip install alembic

# 2. Initialize Alembic
alembic init alembic

# 3. عدل alembic.ini:
sqlalchemy.url = postgresql://user:password@localhost/cid_consulting

# 4. عدل alembic/env.py وأضف:
from models import Base
target_metadata = Base.metadata

# 5. إنشاء migration
alembic revision --autogenerate -m "Initial migration"

# 6. تطبيق migration
alembic upgrade head
```

### إنشاء مستخدم Admin:
```bash
# في Python shell
python

>>> from database import SessionLocal
>>> from models import User, UserRole
>>> from auth import get_password_hash
>>> 
>>> db = SessionLocal()
>>> admin = User(
...     email="admin@cidconsulting.com",
...     hashed_password=get_password_hash("Admin123!"),
...     full_name="Admin User",
...     role=UserRole.ADMIN,
...     is_active=True,
...     is_verified=True
... )
>>> db.add(admin)
>>> db.commit()
>>> print("Admin created!")
```

---

## 💳 إعداد Stripe

### 1. إنشاء حساب Stripe:
- سجل في https://stripe.com
- احصل على API keys من Dashboard
- للتطوير: استخدم Test keys (تبدأ بـ `sk_test_` و `pk_test_`)

### 2. إعداد Webhooks:
```bash
# في Stripe Dashboard:
# Developers > Webhooks > Add endpoint

# URL: http://your-domain.com/api/payments/webhook
# Events to listen:
- payment_intent.succeeded
- payment_intent.payment_failed
- charge.refunded

# احفظ Webhook Secret
```

### 3. اختبار الدفع:
```bash
# استخدم بطاقة اختبار Stripe:
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVV: Any 3 digits
```

---

## 🚀 النشر للإنتاج (Production Deployment)

### الطريقة 1: Docker على VPS

```bash
# 1. رفع الكود للسيرفر
git clone https://github.com/your-repo/cid-consulting.git
cd cid-consulting

# 2. إنشاء .env للإنتاج
cp .env.example .env
# عدل كل القيم للإنتاج

# 3. استخدام Docker Compose للإنتاج
docker-compose -f docker-compose.prod.yml up -d

# 4. إعداد SSL مع Let's Encrypt
docker-compose -f docker-compose.prod.yml run certbot

# 5. إعادة تشغيل Nginx
docker-compose -f docker-compose.prod.yml restart nginx
```

### الطريقة 2: Deployment يدوي

#### Backend على Ubuntu Server:

```bash
# 1. تحديث النظام
sudo apt update && sudo apt upgrade -y

# 2. تثبيت المتطلبات
sudo apt install -y python3-pip python3-venv postgresql nginx

# 3. إعداد PostgreSQL
sudo -u postgres psql
CREATE DATABASE cid_consulting;
CREATE USER cid_user WITH PASSWORD 'strong_password';
GRANT ALL PRIVILEGES ON DATABASE cid_consulting TO cid_user;

# 4. Clone المشروع
git clone https://github.com/your-repo/cid-consulting.git
cd cid-consulting/backend

# 5. Virtual environment
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# 6. إنشاء systemd service
sudo nano /etc/systemd/system/cid-backend.service
```

**محتوى cid-backend.service:**
```ini
[Unit]
Description=CID Consulting Backend
After=network.target postgresql.service

[Service]
User=www-data
Group=www-data
WorkingDirectory=/path/to/cid-consulting/backend
Environment="PATH=/path/to/venv/bin"
ExecStart=/path/to/venv/bin/uvicorn main:app --host 0.0.0.0 --port 8000

[Install]
WantedBy=multi-user.target
```

```bash
# تفعيل وتشغيل الخدمة
sudo systemctl enable cid-backend
sudo systemctl start cid-backend
sudo systemctl status cid-backend
```

#### Frontend Build & Deploy:

```bash
cd ../frontend

# 1. Build للإنتاج
npm install
npm run build

# 2. نسخ الملفات لـ Nginx
sudo cp -r dist/* /var/www/html/

# 3. إعداد Nginx
sudo nano /etc/nginx/sites-available/cid-consulting
```

**محتوى Nginx config:**
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    root /var/www/html;
    index index.html;
    
    # Frontend
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Backend API
    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# تفعيل الموقع
sudo ln -s /etc/nginx/sites-available/cid-consulting /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### SSL مع Let's Encrypt:

```bash
# 1. تثبيت Certbot
sudo apt install certbot python3-certbot-nginx

# 2. الحصول على شهادة SSL
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 3. تجديد تلقائي
sudo certbot renew --dry-run
```

---

## 🧪 الاختبار

### Backend Tests:
```bash
cd backend
pytest tests/
```

### Frontend Tests:
```bash
cd frontend
npm run test
```

### API Testing:
```bash
# استخدم API Docs
http://localhost:8000/api/docs

# أو curl
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!","full_name":"Test User"}'
```

---

## 📊 المراقبة والصيانة

### Logs:

```bash
# Backend logs (Docker)
docker logs cid_backend -f

# Backend logs (Systemd)
sudo journalctl -u cid-backend -f

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# PostgreSQL logs
sudo tail -f /var/log/postgresql/postgresql-15-main.log
```

### Database Backup:

```bash
# Backup
pg_dump -U cid_user -h localhost cid_consulting > backup_$(date +%Y%m%d).sql

# Restore
psql -U cid_user -h localhost cid_consulting < backup_20250101.sql

# Automated daily backup (crontab)
0 2 * * * /usr/bin/pg_dump -U cid_user cid_consulting > /backups/db_$(date +\%Y\%m\%d).sql
```

---

## 🔧 استكشاف الأخطاء (Troubleshooting)

### مشكلة: لا يمكن الاتصال بـ Backend

```bash
# تحقق من تشغيل Backend
curl http://localhost:8000/health

# تحقق من PostgreSQL
sudo systemctl status postgresql

# تحقق من الـ logs
docker logs cid_backend
```

### مشكلة: CORS errors

```bash
# تأكد من ALLOWED_ORIGINS في .env
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

### مشكلة: Database connection failed

```bash
# تحقق من DATABASE_URL
# Format: postgresql://user:password@host:port/database

# اختبر الاتصال
psql -h localhost -U cid_user -d cid_consulting
```

---

## 📚 موارد إضافية

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [React Docs](https://react.dev/)
- [Stripe API](https://stripe.com/docs/api)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Docker Docs](https://docs.docker.com/)

---

## 🆘 الدعم

للمساعدة أو الإبلاغ عن مشاكل:
- Email: support@cidconsulting.com
- GitHub Issues: https://github.com/your-repo/issues

---

## 📝 ملاحظات مهمة

⚠️ **قبل الإنتاج:**
- [ ] غيّر كل المفاتيح السرية
- [ ] فعّل HTTPS
- [ ] راجع CORS settings
- [ ] فعّل rate limiting
- [ ] اعمل backup للـ database
- [ ] اختبر الدفع الإلكتروني
- [ ] راجع SECURITY.md